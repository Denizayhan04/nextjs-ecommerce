"use client"
import { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import AdminSideBar from '@/app/components/admin/AdminSideBar';
import Input from '@/app/components/general/Input';
import { useRouter } from 'next/navigation';
import app from "@/libs/firebase";
import axios from 'axios';
interface FormData {
  name: string;
  category: string;
  brand: string;
  price: number;
  description: string;
  image: Array<string>; 
  inStock: boolean;
}
const page = () => {
  const router = useRouter();
    const [images, setImages] = useState<FileList | null>();
    let uploadedImages: Array<string> = [];
    const [formData, setFormData] = useState<FormData>({
      name: "",
      category: "",
      brand: "",
      price: 0,
      description: "",
      image: [],
      inStock: false
    });
    const uploadFirebase = async () => {
        try {
            if (images) {
                const promises = []; // Asenkron işlemleri tutacak bir dizi
    
                for (let i = 0; i < images.length; i++) {
                    const element = images[i];
                    const storage = getStorage(app);
                    const storageRef = ref(storage, `images/${element.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, images[i]);
    
                    const promise = new Promise<void>((resolve, reject) => {
                        uploadTask.on('state_changed',
                            (snapshot) => {
                                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                                console.log('Upload is ' + progress + '% done');
                                switch (snapshot.state) {
                                    case 'paused':
                                        console.log('Upload is paused');
                                        break;
                                    case 'running':
                                        console.log('Upload is running');
                                        break;
                                }
                            },
                            (error) => {
                                reject(error);
                            },
                            () => {
                                getDownloadURL(uploadTask.snapshot.ref)
                                    .then((downloadURL) => {
                                        console.log('File available at', downloadURL);
                                        uploadedImages.push(downloadURL);
                                        resolve(); // Promise'i tamamla
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                        reject(error);
                                    });
                            }
                        );
                    });
    
                    promises.push(promise); // Promisi diziye ekle
                }
    
                // Tüm asenkron işlemleri bekleyin
                await Promise.all(promises);
    
                console.log(uploadedImages, "sa");
                setFormData((prevState) => ({
                    ...prevState,
                    image: uploadedImages,
                }));
            } else {
                console.log("images içi boş");
            }
        } catch (error) {
            console.log(error, "hata");
        }
    };
    


    const onSubmit = async (e: any) => {
        e.preventDefault();
        await uploadFirebase()
        console.log(formData,)

    };
    const fileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setImages(e.target.files);
        }
    };


          axios.post("/api/product",formData)
        .then(()=>{
            console.log("basarili")
        })
        .catch((e:any)=>{
            console.log(e)
        })  

    

    const handleInputChange = (fieldName: string, e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const checboxFunc = () => {
        setFormData((prevState) => ({
            ...prevState,
            checbox: !(prevState.inStock)
        }));
    };

    return (
        <div className='flex-1 flex'>
            <AdminSideBar />
            <div className=' flex flex-1 justify-center items-center'>
                <form className=' border h-[650px] w-[400px] md:w-[600px] md:h-[800px] ' onSubmit={onSubmit}>
                    <Input width={"100%"} type='text' outline placeholder='Ürün ismi' onChange={(e) => { handleInputChange("name", e) }} />
                    <Input width={"100%"} type='text' outline placeholder='Ürün Kategori' onChange={(e) => { handleInputChange("category", e) }} />
                    <Input width={"100%"} type='text' outline placeholder='Ürün marka' onChange={(e) => { handleInputChange("brand", e) }} />
                    <Input width={"100%"} type='text' outline placeholder='Ürün fiyat' onChange={(e) => { handleInputChange("price", e) }} />
                    <input className='w-full' type='textarea' placeholder='Ürün açıklaması' onChange={(e) => { handleInputChange("description", e) }} />
                    <input className='w-full' type='file' placeholder='Ürün fotolaro' multiple onChange={fileChange} />
                    <label>
                        <input className='w-full' id='checkbox' type="checkbox" onChange={checboxFunc} />
                        instock?
                    </label>
                    <input className='w-full border cursor-pointer border-gray-400 h-8' type="submit" value="asdad" />
                </form>
            </div>
        </div>
    );
};

export default page;

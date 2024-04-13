"use client"
import AdminSideBar from '@/app/components/admin/AdminSideBar'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Product } from '@prisma/client';
import { useRouter } from 'next/navigation';

const page =() => {
  const router = useRouter()
  const [row,setRow] = useState([]);
  var products:any = []
  useEffect(()=>{

    axios.get('/api/get/')
    .then(response => {
      products =response.data
      setRow(products.map((data:any)=>{
        return {
          id:data.id,
          name:data.name,
          price:data.price,
          brand:data.brand,
          category:data.category,
          stock:data.inStock
        }
      }))
    })
    .then(()=>console.log(products))
    .catch(error => console.error('Error fetching data:', error));
    console.log("ss",products)


  },[])

  const handleDelete = (productId:string)=>{
    console.log(productId)
    axios.delete(`/api/delete/${productId}`)
    .then(()=>{
      console.log(31)
      router.refresh();
    })
    .catch((err)=>{console.log(err)})

  }





  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 300, },
    { field: 'name', headerName: 'Name', width: 130 },
    {field: "price",headerName:"Price" ,type:"number",width:100, },
    {field: "brand",headerName:"Brand" ,width:100, },
    {field: "category",headerName:"Category" ,width:100, },
    {field: "stock",headerName:"Stok status" ,width:100, },
    {field: "actions", 
    headerName: "Action", 
    width: 100,
    renderCell: (params) => {
     return (
         <button onClick={() => handleDelete(params.row.id)} className="mx-4 text-red-500 cursor-pointer ">
             Sil 
         </button>
     )
    }
 },
  ];




  return (
    <div className='flex-1 flex '>
      <AdminSideBar />
      <div className=' flex-1 flex justify-center items-center ' >
        <DataGrid
          rows={row}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10,20]}
          checkboxSelection
        />
      </div>

    </div>

  )
}

export default page


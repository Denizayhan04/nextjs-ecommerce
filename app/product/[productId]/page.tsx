
import DetailCard from '@/app/components/cards/DetailCard';
import PageContainers from '@/app/containers/PageContainers';
import React from 'react'

type DetailProps = {
  productId?: string
}

const Detail = ({ params }: { params: DetailProps }) => {

  const { productId } = params;


  return (

    <PageContainers>
      <DetailCard id = {productId} />
    </PageContainers>
  )
}

export default Detail

import DetailCard from '@/app/components/cards/DetailCard';
import PageContainers from '@/app/containers/PageContainers';
import axios from 'axios';
import React from 'react'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

type DetailProps = {
  productId?: string
}

const Detail =async ({ params }: { params: DetailProps }) => {

  const currentUser = await getCurrentUser()
  const { productId } = params;


  return (

    <PageContainers>
      <DetailCard currentUser = {currentUser?.id}  id = {productId} />
    </PageContainers>
  )
}

export default Detail
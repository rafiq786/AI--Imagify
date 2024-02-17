import Header from '@/components/shared/Header'

import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {

  const transformation = transformationTypes[type];

 

  return (
    <>
      <Header 
        title={transformation.title}
        subTitle={transformation.subTitle}
      />
    
      
    </>
  );
}

export default AddTransformationTypePage;

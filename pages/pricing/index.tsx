import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layout/MainLayout'

const Pricing = () => {

  return (
    <MainLayout>
        <h1>Pricing Page</h1>
            <h1 className="title">
                ir Al About
                <Link href="/">Ir Home</Link>
            </h1>

            <p className="description">
                Get started by editing{" "}
                <code className="code">pages/pricing.jsx</code>
            </p>

    </MainLayout>
   
  )
}

export default Pricing
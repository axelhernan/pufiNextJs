import React from 'react';
import Layout from '../components/Layout/Layout';
import Slider from '../components/Layout/Slider';
import Products from '../components/Layout/Products';
import Instagram from '../components/Layout/Instagram';
import Newsletter from '../components/Layout/Newsletter';

export default function Home() {
  return (
    <>
      <Layout>
        <Slider />
        <Products />
        <Instagram />
        <Newsletter />
      </Layout>
    </>
  )
}

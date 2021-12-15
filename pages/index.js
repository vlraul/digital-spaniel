import Head from 'next/head'
import Image from 'next/image'
import Layout from "../components/layout";
import styled from "styled-components";
import Hero from "../components/hero";
import Services from "../components/services";
import Projects from "../components/projects";
import Testimonial from "../components/testimonials";

const Wrapper = styled.div`

`;

export default function Home() {
  return (
    <Layout>
      <Wrapper>
        <Hero />
        <Services />
        <Projects />
        <Testimonial />
      </Wrapper>
    </Layout>
  )
}

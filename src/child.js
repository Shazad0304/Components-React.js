import  MainMenu  from './nestedrout';
import React from 'react';

const PageTemplate = ({children}) =>
 <div className="page">
 <MainMenu />
 {children}
 </div>


export const Events = () =>
 <PageTemplate>
 <section className="events">
 <h1>[Event Calendar]</h1>
 </section>
 </PageTemplate>
 export const Products = () =>
 <PageTemplate>
 <section className="products">
 <h1>[Product Catalog]</h1>
 </section>
 </PageTemplate>
 export const Contact = () =>
 <PageTemplate>
 <section className="contact">
 <h1>[Contact Us]</h1>
 </section>
 </PageTemplate>
 export const About = () =>
 <PageTemplate>
 <section className="about">
 <h1>About</h1>
 </section>
 </PageTemplate>





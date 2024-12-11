import React from 'react';
import Item from './Item'

const Software = () => {
    return (<div className='text-right software-content pr-6 sm:pr-9' style={{ wordWrap: 'break-word', width: '65%', marginLeft:'auto', marginTop:'auto'}}>
    <Item text="*DevOps*: Docker, Terraform, CI/CD, Cloudflare, K8s."  />
    <Item text="*Programming*: JS,  CSS, Ruby, Go, PHP." />
    <Item text="*CMS*: WordPress, Directus, Drupal."  />
    <Item text="*Web*: Accessibility, Web Perf, Analytics, SEO."  />
    <Item text="*Hosting*: GCP, Siteground, Heroku, Netlify."  />
    </div>
    );
};

export default Software;

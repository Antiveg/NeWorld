import React, { useState } from "react"
import styles from './Home.module.css'
import Carousel from '../../components/Carousel/Carousel'
import FeatureCard from "../../components/FeatureCard/FeatureCard"
import '../../global.css'

const Home = () => {

    const features = [
        {
          "img": (
            <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H12M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V11M9 17H11M9 13H13M9 9H10M19.2686 19.2686L21 21M20 17.5C20 18.8807 18.8807 20 17.5 20C16.1193 20 15 18.8807 15 17.5C15 16.1193 16.1193 15 17.5 15C18.8807 15 20 16.1193 20 17.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          ),
          "title": "Search Any Country in an Instant",
          "desc": "NeWorld offers a fast and efficient search functionality that allows you to find any country quickly. NeWorld's lightweight search and filter tools ensures that you know all countries existed in our world, our earth in an instant."
        },
        {
          "img": (
            <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6L21 6.00078M8 12L21 12.0008M8 18L21 18.0007M3 6.5H4V5.5H3V6.5ZM3 12.5H4V11.5H3V12.5ZM3 18.5H4V17.5H3V18.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          ),
          "title": "Get to Know Your World in Detail",
          "desc": "Interested in geography details, country identity, images, flags, and others? NeWorld gives detailed profile that includes maps, and visual representations. This feature offers you a deep dive into the countries that pique their curiosity, helping you gain a better understanding of the world"
        },
        {
          "img": (
            <svg className={styles.svg} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z" fill="currentColor"/>
            </svg>
          ),
          "title": "Dream About Your NeWorld and Know Mine",
          "desc": "NeWorld's About Page contains my own dream NeWorld. You can imagine my own 'NeWorld' and the stories behind it, but you also have the chance to imagine about your dreams for a world that aligns with your values and goals."
        }
    ];
      

    return (
        <div className={styles.base}>
            <Carousel />
            <div className={styles.briefDesc}>
                <h1 className="medium-title">NeWorld: Explore the World of Countries</h1>
                <p className="small-text justify">NeWorld is a simple yet elegant React-based website that allows you to explore countries and their details through the REST Countries API. With NeWorld, you can dive deep into information about various nations, including their populations, capitals, languages, and much more. Whether you're a curious traveler or simply love learning about different parts of the world, NeWorld offers an interactive and fun way to discover new places.</p>
            </div>
            <div className={styles.features}>
                <h1 className="medium-title">Features in NeWorld</h1>
                {features.map((feature) => {
                    return (
                    <FeatureCard 
                    img={feature.img}
                    title={feature.title}
                    desc={feature.desc}
                    /> )
                })}
            </div>
        </div>
    )
}

export default Home
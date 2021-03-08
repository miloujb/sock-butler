import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React from "react"
import Prismic from 'prismic-javascript'
import { client } from "../prismic-config"
import {RichText} from "prismic-reactjs"


export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Sock Butler Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The Sock Butler Test!
        </h1>

        <p className={styles.description}>
          Welcome! Why not start by looking at our{' '}<Link href="/blog"><a>blog?</a></Link>
        </p>
        <div className={styles.description}>
          <h3>
            Today's Trending Article
          </h3>
          <div className={styles.description}>
            <h4>Donec tempus ipsum in posuere malesuada.</h4>
            <h5>Aliquam pretium, mi id fringilla scelerisque, mi lorem pretium ligula, ut pellentesque ex tellus sed nisi. Vestibulum euismod elit eget tristique accumsan. Nunc sagittis ut diam at imperdiet. Nam id odio dignissim, pulvinar enim ac, pretium dui. Nam ultrices sapien eu nibh finibus consectetur. In et enim imperdiet, cursus lacus sit amet, volutpat ante. Nullam metus tortor, vulputate non faucibus sed, aliquet ut odio.</h5>
            <p>
            Aliquam varius mattis sapien. Cras et justo quis odio sollicitudin mollis a sit amet purus. Vivamus a congue orci. Vivamus commodo lacinia ultrices. Donec sit amet dolor nec tellus ultrices sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu massa in tortor blandit maximus id et massa. Etiam euismod dui eu eros viverra euismod. Cras tempor imperdiet lacinia. Quisque vel odio quis sapien lacinia molestie. Mauris vel nisl aliquet, lacinia dolor sit amet, varius justo.

Fusce vestibulum elit commodo est commodo pharetra. Integer vitae odio eget justo hendrerit placerat id non ligula. Mauris sit amet dolor pulvinar, elementum arcu laoreet, ultrices orci. Donec congue leo ac nisl congue, quis feugiat eros mattis. Fusce scelerisque magna ipsum, ut sollicitudin odio sagittis sed. Phasellus vulputate sapien id euismod pulvinar. Nam vitae mi maximus, dictum tortor at, suscipit sapien. Curabitur cursus rutrum rutrum. Vivamus sit amet purus vel ligula faucibus tincidunt vel vel ligula. Nulla ullamcorper metus quis urna molestie, ac posuere enim semper. Praesent ligula leo, blandit vel sapien et, fermentum consectetur nisl. Aliquam lectus massa, cursus vel accumsan vitae, ultricies quis nisi. Phasellus mattis massa a leo lacinia, eget venenatis erat consectetur. Morbi nec hendrerit erat. Sed dapibus lectus eget vulputate malesuada. Nullam mollis mollis metus, quis malesuada tellus feugiat id.

In aliquam nibh vel finibus vehicula. Mauris dapibus leo nec quam pharetra porttitor. Duis bibendum pretium tortor, in dapibus augue imperdiet vitae. Donec quis risus lacus. Nulla viverra leo est, at maximus sapien hendrerit at. Donec tempor risus quis malesuada placerat. Curabitur lorem ligula, sollicitudin tristique elit at, ultricies bibendum leo. Duis lobortis, libero ut pretium elementum, lorem urna viverra urna, ultrices blandit ligula nulla vitae nulla. Cras ac dui non nisi volutpat pretium. Curabitur odio nulla, sagittis et scelerisque et, volutpat et quam. Vestibulum feugiat dui turpis, ac rhoncus justo ultricies vitae. Cras vestibulum mattis lectus eu interdum. Curabitur sed aliquet est. Cras imperdiet venenatis neque nec efficitur. Nulla commodo velit nec consequat pharetra.

Suspendisse vitae enim id justo tristique auctor. Vivamus fringilla, ex ac sollicitudin fringilla, ante enim rhoncus purus, eget rutrum leo orci non lacus. Phasellus ultrices lectus arcu. Etiam fringilla eros id sem varius pulvinar. Vivamus at sollicitudin sem, non cursus tortor. Proin nec interdum ipsum, sit amet vulputate mi. In hac habitasse platea dictumst. Proin felis felis, pulvinar quis dolor ut, tempus feugiat est. Vivamus vitae massa vel lectus ornare placerat. Curabitur a orci purus. Aliquam non elit non dolor condimentum egestas. Suspendisse venenatis libero sit amet dolor vehicula, a dictum tortor facilisis. Donec mattis consequat magna, ut elementum nisl porttitor a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Ut et tellus eget erat tempor auctor. Morbi neque justo, semper vitae gravida sit amet, maximus lobortis nibh. Suspendisse rhoncus rutrum ante. Aliquam eget aliquet lectus. Vivamus semper massa in dictum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi dolor metus, condimentum a magna quis, eleifend rhoncus enim. Ut id blandit diam, maximus venenatis est. Mauris mauris arcu, aliquam et malesuada id, pretium in arcu. Nulla vel consectetur est.

Suspendisse potenti. Quisque ultricies varius leo, sed dapibus arcu dapibus quis. Nam eu sem eget sem commodo dapibus eget et mi. Duis ex libero, tempus at luctus eu, tristique a justo. Pellentesque scelerisque aliquam commodo. Integer sodales, risus sed iaculis tristique, lorem ipsum ultricies libero, vitae tincidunt felis erat a risus. Aliquam in mattis libero. Etiam faucibus eleifend erat, vitae tristique nunc porta id. Suspendisse cursus hendrerit metus, eget tincidunt erat convallis lobortis. Proin sit amet velit a dolor condimentum pellentesque. Nulla facilisi. Nunc pharetra tellus sit amet mi ornare aliquet. Donec nibh risus, maximus iaculis massa vehicula, ornare imperdiet leo.

Cras blandit dignissim sem sed molestie. Praesent condimentum velit a magna pretium, eu hendrerit lectus vestibulum. Proin volutpat, libero in mattis rutrum, arcu elit consequat ligula, fermentum vulputate ligula diam vel lacus. Sed rhoncus consequat scelerisque. Sed faucibus justo libero, sit amet volutpat odio lobortis id. Aenean eu lacus eros. Nulla euismod non ipsum vitae dignissim. Sed placerat dolor nunc, non elementum erat fringilla non. Pellentesque auctor, purus at euismod tristique, purus ante laoreet nibh, at sodales felis tellus in arcu. Mauris quis sem sit amet purus facilisis porta. Phasellus congue efficitur scelerisque. Vivamus ornare condimentum malesuada.

Proin condimentum porta dolor eu pharetra. Aliquam condimentum gravida lacus. Aenean sagittis ullamcorper tincidunt. Mauris efficitur bibendum viverra. Vestibulum ut odio ac risus hendrerit blandit eget sit amet ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus aliquet rutrum. Donec id lobortis nunc. Pellentesque id nisl ac justo scelerisque tempus in ac ante. Etiam mattis ultrices finibus. Fusce nec faucibus dolor.

Suspendisse a auctor urna. Vivamus sapien sem, accumsan eget imperdiet a, auctor malesuada lorem. Praesent condimentum fringilla elit at varius. Integer eget ex in mauris pharetra tempor sed ut enim. Duis ultrices dolor in nulla auctor, non feugiat eros facilisis. Mauris maximus lectus ut convallis faucibus. Vestibulum lacus dolor, eleifend in placerat vitae, cursus id erat. Aenean egestas dui vel elit varius, non mattis odio viverra. Nullam posuere porta leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean porta auctor sapien. Phasellus eu rhoncus tellus. Curabitur nec tellus non justo venenatis finibus. Donec sit amet rhoncus dolor. Donec suscipit blandit massa ut aliquet.
            </p>
          </div>
          <>
          <div>
          <p>Log in{" "}<Link href="/login"><a>here</a></Link>{" "} to see your account details</p>
          </div>
          </>
        </div>
      </main>

      <footer className={styles.footer}>
      <dev>Made by Emily Bailey for Sock Butler, March 2021</dev>
      </footer>
    </div>
  )
}





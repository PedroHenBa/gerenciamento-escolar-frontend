import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const { usuario } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">Bem vindo {usuario?.login}</h1>
    </div>
  )
}

export default Home

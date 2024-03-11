import { useEffect, useState } from 'react'

function Clock (props) {
  /**
   * on initialise l'état local de l'intervalle
   */
  const [date, setDate] = useState(new Date())

  /**
   * Fonction pour mettre à jour la date
   */
  const tick = () => {
    setDate(new Date())
  }

  /**
   * Méthode fournie par React qui s'execute à l'apparition du composant
   * La fonction retournée est automatiquement appelée à la disparition du composant
   * const = à l'apparition du comp
   * return = à la disparition du comp
   * après la funct (ici les []) = pour dire quand mettre à jour le comp
   */
  useEffect(() => {
    const interval = setInterval(() => {
      tick()
    }, props.interval)

    return () => {
      clearInterval(interval)
    }
  }, [props.interval])

  /**
   * retourne l'affichage du composant
   */
  return (
    <h1>{date.toLocaleTimeString()}:{date.getMilliseconds()}</h1>
  )
}

export default Clock

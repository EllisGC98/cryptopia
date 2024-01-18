import { useState } from 'react';
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Input } from 'antd'

import { useGetCryptoQuery } from '../services/cryptoAPI'

const Cryptocurrencies = () => {
   const { data: cryptosList, isFetching } = useGetCryptoQuery();
  return (
    <div>
        Cryptocurrencies
    </div>
  )
}

export default Cryptocurrencies

import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import AlbumCard from './albumCard'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Album() {
  const classes = useStyles()
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <AlbumCard card={card} />
        ))}
      </Grid>
    </Container>
  )
}

export default Album
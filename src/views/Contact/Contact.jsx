import {
  Container,
  Grid,
  TextField,
  makeStyles,
  withStyles,
  Button,
} from '@material-ui/core'
import { Room, Phone, Email } from '@material-ui/icons'
import React from 'react'

const useStyle = makeStyles((theme) => ({
  contactSec: {
    padding: '70px 0',
    backgroundColor: theme.palette.black,
    width: '100%',

    '& h2': {
      color: theme.palette.white,
      fontSize: '44px',
      textTransform: 'uppercase',
      fontWeight: '600',
      letterSpacing: '1px',
      position: 'relative',

      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '-20px',
        left: '50%',
        width: '80px',
        marginLeft: '-40px',
        background: theme.palette.primary.main,
        height: '2px',
      },
    },

    '& h3': {
      color: theme.palette.white,
      fontSize: '25px',
      textTransform: 'uppercase',
      fontWeight: '600',
      letterSpacing: '1px',
      position: 'relative',

      '&::before': {
        content: '""',
        position: 'absolute',
        bottom: '-15px',
        left: '0%',
        width: '80px',
        background: theme.palette.primary.main,
        height: '2px',
      },
    },

    '& h6': {
      color: theme.palette.white,
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.8',
      marginTop: '40px',
      marginBottom: '120px',
    },

    '& p': {
      color: theme.palette.white,
      fontSize: '16px',
      lineHeight: '1.8',
      marginBottom: '40px',
    },
  },

  heading: {
    width: '100%',
    textAlign: 'center',
  },

  connections: {
    marginBottom: '40px',
    paddingLeft: '80px',

    '& svg': {
      width: '30px',
      height: '30px',
      lineHeight: '56px',
      float: 'left',
      border: '1px solid #fff',
      borderRadius: '50%',
      textAlign: 'center',
      marginTop: '-10px',
      marginLeft: '-80px',
      padding: '10px',
    },
  },

  form: {
    margin: '20px 0',

    '& input': {
      color: theme.palette.white,
    },
  },
}))

const CssTextField = withStyles((theme) => ({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    margin: '10px 8px',
  },
}))(TextField)

const Contact = () => {
  const classes = useStyle()
  return (
    <section className={classes.contactSec}>
      <Container>
        <Grid item>
          <Grid item className={classes.heading}>
            <Grid item lg={12} sm={12} xs={6}>
              <h2>Contact</h2>
              <h6>Get in touch with us</h6>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item md={6} sm={6} xs={12}>
              <h3>Connect with us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an.
              </p>
              <p className={classes.connections}>
                <Room />
                Lorem Ipsum is simply dummy
              </p>
              <p className={classes.connections}>
                <Phone />
                Lorem Ipsum is simply dummy
              </p>
              <p className={classes.connections}>
                <Email />
                Lorem Ipsum is simply dummy
              </p>
            </Grid>
            <Grid item md={6} sm={6} xs={6}>
              <h3>Drop Us a Line</h3>
              <form className={classes.form}>
                <div>
                  <CssTextField label='Name' variant='outlined' />
                  <CssTextField label='Email' variant='outlined' />
                </div>
                <CssTextField label='Subject' variant='outlined' fullWidth />
                <CssTextField
                  label='Message'
                  variant='outlined'
                  multiline
                  fullWidth
                />
                <Button variant='contained' color='primary'>
                  Send
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default Contact

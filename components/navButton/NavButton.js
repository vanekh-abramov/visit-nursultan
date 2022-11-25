import classes from './NavButton.module.css'

const NavButton = ({connect, value, text}) => {
  return (
    <>
      <input
        className={classes.toggle_input}
        type="radio"
        id={connect}
        name="contact"
        value={value}
      />
      <label className={classes.toggle_button} htmlFor={connect}>
        {text}
      </label>
    </>
  )
}

export default NavButton
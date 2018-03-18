import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>New social fitness platform</h2>
    <p>Whether you're a trainer looking for some new clients.</p>
    <p>Or an athlete trying to find someone to help you over the next hurdle.</p>
    <p>Register now, to be the first to find out when our new platform lands.</p>
    <form>
      <div class="form-group">
        <label for="register">Email address</label>
        <input type="email" class="form-control" id="register" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

---
layout: default
title: Contact
---

<form action="https://formspree.io/jamesreading473@gmail.com" method="POST">
  <input type="hidden" name="_next" value="{{ '/contact' | absolute_url }}">

  <fieldset class="form-group">
    <label class="form-control-label required" for="Name">Name</label>
    <input class="form-control required" type="text" name="Name" required>
  </fieldset>

  <fieldset class="form-group">
    <input class="form-control required" type="email" name="_replyto" required>
  </fieldset>

  <fieldset class="form-group">
    <input class="form-control" type="number" name="Telephone">
  </fieldset>

  <fieldset class="form-group">
    <textarea class="form-control" rows="3" name="Message" required></textarea>
  </fieldset>

  <input type="submit" value="Send" class="btn btn-primary">
</form>

<template>
  <header>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper blue-grey">
        <!-- <form>
          <div class="input-field">
            <input id="search" type="search" required>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form> -->
        <a href="#!" class="right brand-logo">
          <img src="../assets/chucknorris_logo.png" alt="Logo">
        </a>
        <ul class="left hide-on-med-and-down">
          <li>
            <a class="dropdown-trigger waves-effect waves-purple"
                href="#!" data-target="dropdown1">Dropdown
              <i class="material-icons right">arrow_drop_down</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  img {
    max-width: 165px;
  }
  nav {
    height: 100px;
  }
  .dropdown-trigger {
    margin: 18px 10px 0 10px;
  }
</style>

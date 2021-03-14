<template>
    <div class="container">
        <div class="login-form">
           <h3>Login</h3>
           <p>Welcome to DietHeart</p>
           <div v-if="errors.length">
                <ul>
                    <li class="text-error" v-for="e in errors" v-bind:key="e.id">{{e}}</li>
                </ul>
           </div>
           <form @submit="login" method="post">
               <div class="form-group">
                  <input type="email" v-model="loginData.email" placeholder="Email Address" class="form-control"/>
               </div>
                <div class="form-group">
                  <input type="password" v-model="loginData.password" placeholder="Password" class="form-control"/>
                </div>
                <button class="btn btn-block btn-info">Login</button>
           </form>
           <br>
           <p>Dont'n have a account <router-link to="signup">Create Account</router-link>?</p>
        </div>
    </div>
</template>
<script>
export default{
    name : 'LoginPage',
    data(){
        return {
            errors : [ ],
            loginData  : {
                email    : '',
                password : ''
            }
        }
    },
    methods:{
        login(e)
        {
            e.preventDefault();

            this.errors = [];

             if(this.loginData.email == null || this.loginData.email == ''){
                 this.errors.push('Email field is required');
             }
             if(this.loginData.password == null || this.loginData.password == ''){
                 this.errors.push('Password field is required');
             }

        }

    }
}
</script>
<style scoped>
   .login-form{
       width: 400px;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-50%);
   }
   .login-form h3,p{
       text-align: center;
   }
</style>
<template>
    <div class="container">
        <div class="login-form">
           <h3>SignUp</h3>
           <p>Welccome to DietHeart</p>
           <div v-if="errors.length">
                <ul>
                    <li class="text-error" v-for="e in errors" v-bind:key="e.id">{{e}}</li>
                </ul>
           </div>
           <form @submit="signup" method="post">
               <div class="form-group">
                  <input type="name" v-model="signupData.name" placeholder="User name" class="form-control"/>
               </div>
               <div class="form-group">
                  <input type="email" v-model="signupData.email" placeholder="Email Address" class="form-control"/>
               </div>
                <div class="form-group">
                  <input type="password" v-model="signupData.password" placeholder="Password" class="form-control"/>
                </div>
                <div class="form-group">
                  <input type="password" v-model="signupData.confirm_password" placeholder="Confirm Password" class="form-control"/>
                </div>
                <button class="btn btn-block btn-info">Login</button>
           </form>
            <br>
            <p>Already have an account <router-link to="login">Login</router-link>?</p>
        </div>
    </div>
</template>
<script>
export default{
    name : 'LoginPage',
    data(){
        return {
            errors : [ ],
            signupData  : {
                name     : '',
                email    : '',
                password : '',
                confirm_password : ''
            }
        }
    },
    methods:{
        signup(e)
        {
            e.preventDefault();

            this.errors = [];

             if(this.signupData.name == null || this.signupData.name == ''){
                 this.errors.push('Name field is required');
             }
             if(this.signupData.email == null || this.signupData.email == ''){
                 this.errors.push('Email field is required');
             }
             if(this.signupData.password == null || this.signupData.password == ''){
                 this.errors.push('Password field is required');
             }
             if(this.signupData.confirm_password == null || this.signupData.confirm_password == ''){
                 this.errors.push('Confirm Password field is required');
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
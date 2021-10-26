<template>
  <div id="head">
    <div id="body">
      <el-card class="box-card">
        <div class="img"><el-avatar :size="100" :src="circleUrl"></el-avatar></div>

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="用户名" prop="name">
          <el-input  type="text" v-model.number="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <div class="but">
        <el-form-item><el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button></el-form-item>
          <el-form-item><el-button type="primary" @click="resetForm('ruleForm')">立即重置</el-button></el-form-item>
        </div>
          <p>已有账户？<router-link :to="{name:'Login'}">登录</router-link></p>

        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //规则
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      circleUrl: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      //表单数据
      ruleForm: {
        name: '',
        password: ''
      },
      //绑定校验规则
      rules: {
        name: [
          { required:true, validator: checkName, trigger: 'blur' },
          {min:5,max:10,message:'长度需在5个字符到10个字符之间',trigger:'blur'}

        ],
        //验证密码
        password: [
          {validator: validatePass, trigger: 'blur',required:true },
          {min:5,max:10,message:'长度需在5个字符到10个字符之间',trigger:'blur'}

        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur',required:true },
        ]
      }
    };
  },
  //表单的提交
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
         axios.post('http://tianxaingbook.top:6198/user/regist', {
                  username:this.ruleForm.name ,
                  password:this.ruleForm.password,
              },
          ).then(resp => {
            if(resp.data.code === 10000){
              this.$message('注册成功');
              this.$router.push('/Login')
            }
          })
        }else {
          this.$message('注册失败，请检测账号密码并重新注册');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
#head{
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

}
#body{
  width: 500px;
  text-align: center;

}
.img{
  margin-bottom: 10px;
}
.but{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>

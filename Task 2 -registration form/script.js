       function checkPasswordStrength() {
         const pwd = document.getElementById("password1").value;
         const strengthText = document.getElementById("strength-msg");

         let strength = 0;
         if (pwd.length >= 6) strength++;
         if (/[A-Z]/.test(pwd)) strength++;
         if (/[0-9]/.test(pwd)) strength++;
         if (/[@$!%*#?&]/.test(pwd)) strength++;
         if (strength <= 1) {
          strengthText.innerText = "Weak 🔴";
          strengthText.style.color = "red";
         } else if (strength == 2 || strength == 3) {
          strengthText.innerText = "Medium 🟠";
          strengthText.style.color = "orange";
         } else {
          strengthText.innerText = "Strong 🟢";
          strengthText.style.color = "green";
         }
        }
       function checkPasswordMatch() {
         const pwd1 = document.getElementById("password1").value;
         const pwd2 = document.getElementById("password2").value;
         const matchText = document.getElementById("match-msg");

         if (pwd1 === pwd2) {
           matchText.innerText = "✅ Passwords match";
           matchText.style.color = "green";
         } else {
           matchText.innerText = "❌ Passwords do not match";
           matchText.style.color = "red";
         }
        }

        function togglePassword() {
          const pwd = document.getElementById("password1");
         const icon = document.getElementById("togglePwd");

         if (pwd.type === "password") {
          pwd.type = "text";
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
         } else {
          pwd.type = "password";
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
         }
        }
         function togglePassword() {
          const pwd = document.getElementById("password2");
         const icon = document.getElementById("togglePwd");

         if (pwd.type === "password") {
          pwd.type = "text";
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
         } else {
          pwd.type = "password";
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
         }
        }
        
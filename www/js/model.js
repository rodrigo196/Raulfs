/**
 * Created by rodrigo on 06/09/14.
 */
define(
    "js/model",
    [],

    function(){

        function User(){
            this.email = "";
            this.name = "";
            this.password = "";
            this.birthday = "";

            this.getAge = function(){
                return 25;
            }

        }

        return User;
    }

);
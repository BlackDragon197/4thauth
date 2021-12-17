// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { UserModel } from "../../utils/UserModel"


export default function handler(req, res) {

  const {email, password} = req.body
  const emailo = req.body.email
  console.log('here is emailo from get')
  console.log(emailo)

  UserModel.countDocuments({email: emailo}, function (err, count){ 
      if(count>0){
          //document exists });
          UserModel.findOne({'email': emailo})
          .exec(function (err, user) {
          if (err) {
            console.log('у вас ошибка: ',err);
            res.send('у вас ошибка: ',err)
          } else {
            //res.cookie('token', user/*, COOKIE_OPTIONS*/)
            res.json(user);
            //console.log(user);
          }
        });
      }
      else{
          res.send(null)
      }
  }); 


 // res.status(200).json({email, password})
}

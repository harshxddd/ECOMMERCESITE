const router=require('express').Router();
const Cart=require('../models/Cart')

const {verifyToken,verifyTokenAndAuthorization ,verifyTokenAndAdmin}=require('./verifyToken')

// Create

router.post('/',verifyToken,async(req,res)=>{

    const newCart= new Cart(req.body)

    try{
    const savedCart= await newCart.save()
    res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json('cannot build')
    }

})


// UPDATE

router.put("/:id",verifyTokenAndAuthorization,async(req,res)=>{

    try{

        const updateCart= await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        },{new:true})

        res.status(200).json(updateCart)
    }catch(err){
        res.status(500).json(err)
    }

})


// DELETE

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{

    try{

        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json ('Cart has been deleted...')
    }catch(err){
        res.status(500).json(err)
    }


})


// GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userId });
      res.status(200).json(cart);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// GET ALL USER

router.get('/',verifyTokenAndAdmin,async(req,res)=>{

    try{
       const allCart=await User.find()

        res.status(200).json(allCart)


    }catch(err){
        res.status(500).json(err)
    }

})

module.exports=router
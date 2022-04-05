const express = require('express')
const Books = require('../models/books')
const { validationResult } = require("express-validator")



const get_books = (req,res,next)=>{
    Books.find({}, function(err,data){
        if(err)
        req.json({
            success:false,
            data: err
        })
        else
        res.json({
            success:true,
            data: data
        })
    })
}

const createbooks = (req,res,next)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        success:false,
        errors: errors.array(
        )
      })
    }else{
      const data = req.body 
      Books.create(data,function (err, data){
        if(err) 
        res.json({
          success:false,
          data: err
        })
        else
        res.json({
          success: true,
          data: data}
        )
      })
    }
}
const updatebooks = (req,res,next) => {
  const data = req.body
  const id = req.params.id 
  Books.updateOne({_id:id}, data, function(err,data){
    if(err) 
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success:true,
      data:data
    })
  })
}

const deletebooks = (req,res,next) =>{
  Books.findOneAndDelete({
    _id:req.params.id 
  }) 
  .then((data)=> res.json(data))
  .catch((err)=> res.json(err))
}
module.exports = {
    get_books, createbooks, updatebooks, deletebooks
}
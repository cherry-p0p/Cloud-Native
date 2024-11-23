const express = require("express");
const { Todo } = require("../models");
const router = express.Router();


router.get("/todos", async (req, res) => {

  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});


router.post("/todo", async (req, res) => {
  try {
    let newTodo = await Todo.create({
      title: req.body.title,
    });
    res.send(newTodo);
  } catch (err) {
    res.send(err);
  }
});


router.patch("/todo/:todoId", async (req, res) => {

  try {
    let [isUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );

    if (!isUpdated) {
      return res.send(false);
    }


    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

router.delete("/todo/:todoId", async (req, res) => {
  try {
    let isDeleted = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });
    console.log(isDeleted); 

    if (!isDeleted) {
      return res.send(false);
    }


    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

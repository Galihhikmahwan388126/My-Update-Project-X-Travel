import express from 'express';
import mongoose from "mongoose";

const router = express();
const mongoose = mongoose();

//CREATE a new payments
app.post('/api/payment', async (req, res) => {
    try {
      const paymentData = req.body;
      const newPayment = new Payment(paymentData);
      await newPayment.save();
      res.status(201).json({ message: 'Payment created successfully', payment: newPayment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //GET all payments
  app.get('/api/payments', async (req, res) => {
    try {
      const payments = await Payment.find();
      res.status(200).json(payments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //GET a specific payment ID
  app.get('/api/payment/:id', async (req, res) => {
    try {
      const payment = await Payment.findById(req.params.id);
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      res.status(200).json(payment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //UPDATE a payment by ID
  app.put('/api/payment/:id', async (req, res) => {
    try {
      const updatedPayment = await Payment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedPayment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      res.status(200).json({ message: 'Payment updated successfully', payment: updatedPayment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //DELETE a payment by ID
  app.delete('/api/payment/:id', async (req, res) => {
    try {
      const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
      if (!deletedPayment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      res.status(200).json({ message: 'Payment deleted successfully', payment: deletedPayment });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  export default payment;

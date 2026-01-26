---
sidebar_position: 3
title: Quickstart
---

:::warning Important
You need to click the Assetto Corsa window for model inputs to register. Unfortunately, you cannot use your computer for other tasks while the model is training or testing.
:::

Complete the [Install Guide](./install.md) and launch Assetto Corsa.

## Record Demonstrations

First, record demonstration laps around Monaco. This will create training data for the model to pretrain on:

```bash
acrl ac record-demonstrations --output-dir datasets/demonstrations --duration 999999999999
```

Drive laps around Monaco. The demonstrations will be saved to the specified output directory.

## Train the Model

After recording demonstrations, train the behavioral cloning model:

```bash
acrl ac train-bc --data-dir datasets/demonstrations --epochs 250 --batch-size 64 --dropout 0.3
```

## Test the Model

Load and test the trained model:

```bash
acrl ac test --ckpt models/bc_pretrained.pt --episodes 5
```




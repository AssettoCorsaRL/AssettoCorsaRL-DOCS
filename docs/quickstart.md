---
sidebar_position: 3
title: Quickstart
---

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

You can use your computer for other tasks while training runs.

## Test the Model

Load and test the trained model:

```bash
acrl ac test --ckpt models/bc_pretrained.pt --episodes 5
```

:::warning
Assetto Corsa window should always be active during testing. You cannot use your computer during testing.
:::

:::tip Troubleshooting
If the CLI shows the model's inputs but nothing happens in AC, check your vJoy installation. In Content Manager, it should be detected as "XBOX CONTROLLER" not "VJOY".
:::




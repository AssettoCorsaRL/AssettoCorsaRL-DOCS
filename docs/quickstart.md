---
sidebar_position: 3
title: Quickstart
---

Complete the [Install Guide](./install.md) and launch Assetto Corsa.


## Test the Model

Load and test the pretrained model:

```bash
acrl ac test --checkpoint absolute/path/of/bc_sac_pretrained.pt --vae-checkpoint absolute/path/of/loss=0.1050.ckpt --episodes 5
```

:::warning
Assetto Corsa window should always be active during testing. You cannot use your computer during testing.
:::

:::tip Troubleshooting
If nothing happens in Assetto Corsa after running the script, check your vJoy installation. In Content Manager, navigate to Settings → Assetto Corsa → Controls and verify it displays "XBOX CONTROLLER" on the right. Then, after that, launch Assetto Corsa.
:::




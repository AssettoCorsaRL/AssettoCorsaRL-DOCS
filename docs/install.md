---
sidebar_position: 2
title: Install
---

Follow these steps to install AssettoCorsaRL, set up Content Manager with Custom Shaders Patch, install the Monaco track and the VRC Formula Alpha car, then run a Hotlap.

## Prerequisites

- Python 3.10 or later
- Assetto Corsa (base game)

## Installation

### 1. Install AssettoCorsaRL

Install the package from PyPI:

```bash
pip install assetto-corsa-rl
```

:::tip
Using a Virtual Environment (Optional)

For better isolation, create a Python virtual environment:

```bash
python -m venv acrl-env
acrl-env\Scripts\activate
source acrl-env/bin/activate

pip install assetto-corsa-rl
```

Alternatively, you can use [Anaconda](https://www.anaconda.com/products/distribution):
```bash
conda create -n acrl python=3.10
conda activate acrl
pip install assetto-corsa-rl
```

Or, install from the GitHub repository:
```bash
git clone https://github.com/AssettoCorsaRL/AssettoCorsaRL
cd assetto-corsa-rl
pip install -e .
```
:::
  
The `acrl` CLI command is now available in your terminal. Verify the installation:

```bash
acrl --help
```

## Setup

### 2. Install Content Manager and the Custom Shaders Patch (CSP)

- Follow this video to install **Content Manager** and **Custom Shaders Patch** (step at ~1:08 shows the install process):
  https://youtu.be/qVjE2FG5MRA?si=cUVu5k7oIzNDJ-Wx&t=68
- After installing Content Manager, install CSP through Content Manager's "Mods" or "Settings → Custom Shaders Patch" flow as shown in the video.

### 3. Install the AssettoCorsaRL App

- Download the latest release from: https://github.com/AssettoCorsaRL/AssettoCorsaRL-APP/releases
- Follow this tutorial to install and activate the app (step at ~1:09 shows the installation):
  https://youtube.com/watch?si=LXBP1FOtXsphdDCk&t=69&v=EfT1T4W_5Ew&feature=youtu.be

<video controls width="100%">
  <source src="/AssettoCorsaRL-DOCS/video/ac_settings_setup.mp4" type="video/mp4" />
</video>

### 4. Install the Monaco track (Monaco F1 2022):

- Download from: https://www.assettoworld.com/track/2022-monaco-f1-grand-prix
- After downloading, drag & drop the downloaded zip into **Content Manager** to install the track.

### 5. Install the Formula Alpha 2022 car:

- Download from: https://www.virtual-racing-cars.com/p/formula-alpha-2022/
- Drag & drop the car zip into **Content Manager** to install it.

### 6. Run a Hotlap

<video controls width="100%">
  <source src="/AssettoCorsaRL-DOCS/video/ac_hotlap_setup.mp4" type="video/mp4" />
</video>

## Next Steps

- Learn how to use the CLI: See [CLI Usage Guide](./cli.md)
---
sidebar_position: 4
title: Project Structure
---

# Project Structure

This page summarizes the repository layout and points you at the most important modules and classes to inspect when working on AssettoCorsaRL.

## Repository tree

```
assetto-corsa-rl/
┣ configs/
┃ ┣ ac/
┃ ┗ car-racing/
┃   ┣ env_config.yaml
┃   ┣ model_config.yaml
┃   ┗ train_config.yaml
┣ scripts/
┃ ┣ ac/
┃ ┃ ┣ record_racing_line.py
┃ ┃ ┣ vis_env_observation.py
┃ ┃ ┗ vis_racing_line.py
┃ ┗ car-racing/
┃   ┣ load.py
┃   ┣ load_vae.py
┃   ┣ train_car_racing.py
┃   ┗ train_vae.py
┣ src/
┃ ┗ assetto_corsa_rl/
┃   ┣ model/
┃   ┃ ┣ noisy.py
┃   ┃ ┣ sac.py
┃   ┃ ┣ vae.py
┃   ┃ ┗ __init__.py
┃   ┣ train/
┃   ┃ ┣ train_core.py
┃   ┃ ┣ train_utils.py
┃   ┃ ┗ __init__.py
┃   ┣ ac_env.py
┃   ┣ ac_send_actions.py
┃   ┣ ac_telemetry_helper.py
┃   ┣ env_helper.py
┃   ┣ load.py
┃   ┗ __init__.py
┣ tests/
┃ ┣ test_ac_env.py
┃ ┣ test_ac_reward.py
┃ ┣ test_env.py
┃ ┣ test_sac.py
┃ ┣ test_xbox_buttons.py
┃ ┗ test_xbox_controller.py
┣ pyproject.toml
┣ README.md
┗ requirements.txt
┗ setup.cfg
```

---

## Key objects 🔍

### Environment

- **Class**: `assetto_corsa_rl.ac_env.AssettoCorsa`
- **What to inspect**: environment lifecycle, observation & action spaces, and how racing lines are loaded via `AssettoCorsa._load_racing_line`.
- **File**: `assetto-corsa-rl/src/assetto_corsa_rl/ac_env.py`

### Trainer / training core

- **Class**: `assetto_corsa_rl.train.train_core.Trainer`
- **What to inspect**: env stepping, buffering, and learning updates (see `_do_update`).
- **File**: `assetto-corsa-rl/src/assetto_corsa_rl/train/train_core.py`

### Recorder / Visualizer

- **RacingLineRecorder**: records laps and writes `racing_lines.json`.
- **RacingLineVisualizer**: 3D visualization and `load_racing_data` helper.
- **Files**: `assetto-corsa-rl/scripts/ac/record_racing_line.py`, `assetto-corsa-rl/scripts/ac/vis_racing_line.py`

### AC plugin & telemetry

- **Plugin hooks**: `AC_RL.third_party.stdlib.AC_RL.acMain`, `acUpdate`, `handle_input_data` — plugin that sends telemetry JSON via UDP and accepts commands.
- **Telemetry helper**: `AC_RL.telemetry.hexdump` — simple UDP listener/parser useful for debugging.
- **Files**: `AC_RL/third_party/stdlib/AC_RL.py`, `AC_RL/telemetry.py`

### Data / checkpoints

- **Racing line dataset**: `racing_lines.json` — top-level JSON, contains `num_laps` and `laps[].positions[]` (timestamp, x, y, z).
- **Experiment logs**: `wandb/` run directories.
- **Checkpoints**: `models/` (e.g., `sac_checkpoint_100000.pt`).

### Runner / policy loader

- **Entry**: `assetto_corsa_rl.load.main` — loads an actor, calls `env.step`, and handles actor outputs (action shaping/sampling are implemented here).
- **File**: `assetto-corsa-rl/src/assetto_corsa_rl/load.py`

### Tests

- **Core env tests**: `assetto-corsa-rl/tests/test_ac_env.py`
- **Other unit tests**: `assetto-corsa-rl/tests/` (look for module/unit tests here).

---

## Quick tips

- To run tests: `pytest assetto-corsa-rl/tests`.
- To inspect the trainer loop quickly: open `train_core.py` and search for `_do_update`.
- To visualize recorded lines: run `scripts/ac/vis_racing_line.py` (requires display dependencies).

---

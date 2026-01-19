---
sidebar_position: 3
title: CLI
---

# CLI Usage Guide

The AssettoCorsaRL CLI (`acrl`) provides a command-line interface to interact with the project's tools and scripts.

## Getting Started

After installation, the `acrl` command becomes available in your terminal. To see all available commands:

```bash
acrl --help
```

## Command Structure

Commands are organized into groups:

```bash
acrl <group> <command> [options]
```

### Available Groups

- **ac**: Assetto Corsa specific commands
- **car-racing**: General car racing and training commands

## Listing Commands

To see all commands in a group:

```bash
acrl ac --help
acrl car-racing --help
```

## Running Commands

### Basic Usage

```bash
acrl ac <command-name> --option value
```

### Getting Help for a Command

Every command has built-in help documentation:

```bash
acrl ac <command-name> --help
```

This displays:
- Command description
- Required options
- Optional parameters with defaults
- Usage examples

## Common Options

Most commands support these common patterns:

### Required Options
Options marked as required must be provided:
```bash
acrl ac train --config path/to/config.yaml
```

### Optional Parameters
Parameters with defaults can be omitted:
```bash
acrl ac train --epochs 100  # Override default
acrl ac train              # Use default epochs
```

### Boolean Flags
Enable features with flags (no value needed):
```bash
acrl ac train --verbose
acrl ac train --debug
```

### Multiple Name Aliases
Some options have short forms:
```bash
acrl ac process --input data.txt    # Long form
acrl ac process -i data.txt         # Short form
```

## Examples

### Training a Model
```bash
acrl car-racing train --config configs/default.yaml --epochs 500
```

### Running with Verbose Output
```bash
acrl ac simulate --track monza --verbose
```

### Processing Data
```bash
acrl ac process-telemetry --input session.json --output processed/
```

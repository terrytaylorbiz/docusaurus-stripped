---
title: POS standalone (with table)
sidebar_label: POS standalone (with table)
---

Txxxxxx in the following table.


| Configuration Key | Type | Description | Default |
|-------------------|------|-------------|---------|
| cmd_sub_ep | String | Subscription endpoint for acquisition (tcp://url_or_ip:port) | tcp://emilia.ics.hawaii.edu:9000 |
| cmd_push_ep | String | Push endpoint for acquisition (tcp://url_or_ip:port) | tcp://emilia.ics.hawaii.edu:9001 |
| trg_push_ep | String | Push endpoint for triggering (tcp://url_or_ip:port) | tcp://emilia.ics.hawaii.edu:9880 |
| updates_ep | String | Endpoint to check and pull OPQ Box updates (http[s]://url_or_ipcd :port/path) | http://emilia.ics.hawaii.edu:8151 |
| server_public_key | String | The public key of the acquisition server for data encryption | |
| box_id | Integer | The id of the box. Must be positive and unique. | |
| device_path | String | Unknown | /dev/opq0 |
| calibration | Float | The calibration constant for this box | |
| windows_per_measurement | Integer | Number of window rolled into a single measurement | 60 |
| windows_in_storage_buffer | Integer | Number of windows to buffer on the OPQ Box | 3000 |
| plugins | List[String] | List of plugins to load on OPQ Box | |

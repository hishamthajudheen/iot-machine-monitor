# IoT Based Industrial Machine Monitoring System

This repository contains an IoT machine monitoring system built using FastAPI. The system establishes a WebSocket connection with a NodeMCU device to receive real-time sensor data and provides a dashboard with switches to control connected devices or sensors.

## Features

- Real-time Sensor Data: The system establishes a WebSocket connection with a NodeMCU device to receive real-time sensor data from the machine.

- Device Control: The dashboard includes switches that enable users to remotely control various connected devices or sensors.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/iot-machine-monitoring.git
   ```

2. Navigate to the project directory:

   ```bash
   cd iot-machine-monitoring
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

1. Run the FastAPI server:

   ```bash
   uvicorn main:app --host 0.0.0.0 --port 8000
   ```

2. Open your web browser and access the dashboard by visiting `http://localhost:8000`.

3. Use the switches on the dashboard to remotely control connected devices or sensors.

## Configuration

Modify the `config.py` file to customize the settings of the IoT machine monitoring system:

- `NODEMCU_IP`: Specify the IP address of the NodeMCU device to establish the WebSocket connection.

- `NODEMCU_PORT`: Set the port on which the NodeMCU device is listening for WebSocket connections.

## WebSocket Communication

The system communicates with the NodeMCU device using the WebSocket protocol. The WebSocket endpoint is located at `/ws`.

### Receiving Sensor Data

The system receives real-time sensor data from the NodeMCU device, and this data is then formatted and displayed on the dashboard.

### Sending Control Commands

Utilize the switches available on the dashboard to send control commands to connected devices or sensors via the WebSocket connection with the NodeMCU device.

## Credits

This project was developed by Anand K Vinu, Hisham Thajudheen, Nandana Anil and Sreyas A computer science students of Cochin University of Science & Technology , as part of our third year mini-project.

## License

This project is licensed under the [MIT License](LICENSE).

---

For any questions or assistance, please contact us.

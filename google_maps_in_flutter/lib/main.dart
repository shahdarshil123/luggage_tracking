import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  GoogleMapController controller;
  final Map<String, Marker> _markers = {};

  void _onMapCreated(GoogleMapController controller) {
    this.controller = controller;
    setState(() {
      _markers.clear();
      final marker = Marker(
        markerId: MarkerId('Location'),
        position: LatLng(19.1332128, 72.8213488),
        infoWindow: InfoWindow(title: 'Luggage'),
      );
      _markers['Location'] = marker;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Maps Sample App'),
          backgroundColor: Colors.green[700],
        ),
        body: GoogleMap(
          onMapCreated: _onMapCreated,
          initialCameraPosition: CameraPosition(
            target: LatLng(19.1332128, 72.8213488),
            zoom: 5.0,
          ),
          markers: _markers.values.toSet(),
        ),
      ),
    );
  }
}

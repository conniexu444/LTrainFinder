export interface TripUpdate {
  trip:           Trip;
  stopTimeUpdate: StopTimeUpdate[];
  timestamp:      string;
}

export interface StopTimeUpdate {
  stopSequence:         number;
  arrival:              Arrival;
  departure?:           Arrival;
  stopId:               string;
  scheduleRelationship: string;
}

export interface Arrival {
  delay:       number;
  time:        string;
  uncertainty: number;
}

export interface Trip {
  tripId:               string;
  startDate:            string;
  scheduleRelationship: string;
  routeId:              string;
  directionId:          number;
}

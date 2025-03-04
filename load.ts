import fetch from 'node-fetch';
import GtfsRealtimeBindings from 'gtfs-realtime-bindings';
import { writeFileSync } from 'fs';

const L_TRAIN_API_ENDPOINT = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l';
const TMP_OUTPUT = 'output.json';

const main = async () => {
  const response = await fetch(L_TRAIN_API_ENDPOINT);
  const buffer = await response.arrayBuffer();
  const feed = GtfsRealtimeBindings.transit_realtime.FeedMessage.decode(
    new Uint8Array(buffer)
  );
  const result = [];
  feed.entity.forEach((entity) => {
    if (entity.tripUpdate) {
      result.push(entity.tripUpdate);
    }
  });

  writeFileSync(TMP_OUTPUT, JSON.stringify(result, undefined, 2));
};

main();

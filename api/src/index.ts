import { logger } from "./config/observability";
import { createApp } from "./app";
import SocketService from "./service/socketService";
import { createServer } from "http";
import RedisService from "./service/cacheService";
import { getConfig } from "./config";
import MongoService from "./service/dbService";

const main = async () => {
  const port = process.env.PORT || 3100;

  const socketService = new SocketService();
  const config = await getConfig();
  // await MongoService.connect(config.database);
  await RedisService.connect(config.cache);

  const app = await createApp();
  const server = createServer(app);
  socketService.io.attach(server);
  server.listen(port, () => {
    logger.info(`Started listening on port ${port}`);
  });

  socketService.initListeners();
};

main();

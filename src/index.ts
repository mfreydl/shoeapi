import "reflect-metadata";
import { apiHost } from "@mfreydl/nodejs_api/bin/apiCore";
import { myApiDef } from "./myApiDef";

const host = apiHost.create(new myApiDef())
    .then(host => host.Start());
    
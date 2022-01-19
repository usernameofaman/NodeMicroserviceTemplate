/**
 * Created by AyushK on 18/09/20.
 */
import * as ValidationManger from "../middleware/validation";
import UserModule from "../app/modules/user";
import {stringConstants} from "../app/common/constants";

module.exports = (app) => {
    app.get('/', (req, res) => res.send(stringConstants.SERVICE_STATUS_HTML));

    /**
     * route definition
     */
    app.post("/login", new UserModule().loginUser);
    app.post("/api/register", new UserModule().registerUser);
    app.get("/userDetails", new UserModule().getUser);
};

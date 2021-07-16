import Express from "express";
import morgan from "morgan";
import { createRoles } from "./libs/initialSeptup";
const app = Express();

// Routes
import ProductRoutes from "./routes/products.routes";
import UsersRoutes from "./routes/user.routes";
import BuysRoutes from "./routes/buys.routes";
import AuthRoutes from "./routes/auth.routes";

// Settings
createRoles();
app.use(morgan('dev'))
app.use(Express.json())

app.use('/products', ProductRoutes);
app.use('/buys', BuysRoutes);
app.use('/users', UsersRoutes);
app.use('/auth', AuthRoutes);

export default app;
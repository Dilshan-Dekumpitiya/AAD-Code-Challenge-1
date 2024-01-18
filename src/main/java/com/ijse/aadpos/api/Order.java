package com.ijse.aadpos.api;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ijse.aadpos.db.ItemDBProcess;
import com.ijse.aadpos.db.OrderDBProcess;
import com.ijse.aadpos.dto.ItemDTO;
import com.ijse.aadpos.dto.OrderDTO;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

@WebServlet(name = "order", urlPatterns = "/order")
public class Order extends HttpServlet {
    Connection connection;
    @Override
    public void init() throws ServletException {
        try {
            InitialContext ctx = new InitialContext();
            DataSource pool = (DataSource) ctx.lookup("java:comp/env/jdbc/pos");
            this.connection = pool.getConnection();
        } catch (SQLException | NamingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        List<OrderDTO> allOrder = new OrderDBProcess().getAllItem(connection);
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonResult = objectMapper.writeValueAsString(allOrder);
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        System.out.println("DO GET");
        resp.getWriter().write(jsonResult);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Jsonb jsonb = JsonbBuilder.create();
        OrderDTO orderDTO = jsonb.fromJson(req.getReader(), OrderDTO.class);

        OrderDBProcess orderDBProcess = new OrderDBProcess();

        if(orderDBProcess.saveOrder(orderDTO, connection)){
            PrintWriter writer = resp.getWriter();
            writer.write("Order Saved !");
        }
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Jsonb jsonb = JsonbBuilder.create();
        ItemDTO itemDTO = jsonb.fromJson(req.getReader(), ItemDTO.class);

        ItemDBProcess itemDBProcess = new ItemDBProcess();

        if(itemDBProcess.updateItemQuantity(itemDTO, connection)){
            PrintWriter writer = resp.getWriter();
            writer.write("Item Quantity Updated !");
        }
    }
}

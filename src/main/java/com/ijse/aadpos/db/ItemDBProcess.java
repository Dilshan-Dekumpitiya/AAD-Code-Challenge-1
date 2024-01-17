package com.ijse.aadpos.db;

import com.ijse.aadpos.dto.ItemDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class ItemDBProcess {
    final static Logger logger = LoggerFactory.getLogger(ItemDBProcess.class);
    public boolean saveItem(ItemDTO itemDTO, Connection connection){
        try {
            PreparedStatement ps = connection.prepareStatement("INSERT INTO item(item_id,item_name,quantity,price) VALUES (?,?,?,?,?)");
            ps.setString(1, itemDTO.getItem_id());
            ps.setString(2, itemDTO.getItem_name());
            ps.setInt(3, itemDTO.getQuantity());
            ps.setDouble(4, itemDTO.getPrice());

            if (ps.executeUpdate() != 0) {
                logger.info("Data saved");
                return true;
            } else {
                logger.error("Failed to save");
                return false;
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public List<ItemDTO> getAllItem(Connection connection) {
        List<ItemDTO> itemDTOS = new ArrayList<>();
        try {
            ResultSet resultSet = connection.prepareStatement("select * from item").executeQuery();
            while(resultSet.next()) {
                ItemDTO itemDTO = new ItemDTO(
                        resultSet.getString(1),
                        resultSet.getString(2),
                        resultSet.getInt(3),
                        resultSet.getDouble(4)
                );
                itemDTOS.add(itemDTO);
            }
        }catch (SQLException e){
            e.printStackTrace();
        }
        return itemDTOS;
    }

    public boolean updateItem(ItemDTO itemDTO, Connection connection) {
        try {
            PreparedStatement ps = connection.prepareStatement("UPDATE item set item_name=?, quantity=?, price=? where item_id=?");
            ps.setString(1, itemDTO.getItem_name());
            ps.setInt(2, itemDTO.getQuantity());
            ps.setDouble(3, itemDTO.getPrice());
            ps.setString(4, itemDTO.getItem_id());

            if (ps.executeUpdate() != 0) {
                return true;
            } else {
                return false;
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public boolean deleteItem(String itemId, Connection connection) {
        try {
            PreparedStatement ps = connection.prepareStatement("DELETE from item where item_id=?");
            ps.setString(1, itemId);

            if (ps.executeUpdate() != 0) {
                return true;
            } else {
                return false;
            }
        }catch (SQLException e){
            e.printStackTrace();
        }
        return false;
    }
}

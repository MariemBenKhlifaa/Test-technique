package com.tn.ngsign.test.user.controller;
import com.tn.ngsign.test.user.modal.UserModal;
import com.tn.ngsign.test.user.service.UserInterface;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
UserInterface userInterface;
    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody UserModal userModal ) {
        try {
            userInterface.addUser(userModal);
            Map<String, String> response = new HashMap<>();
            return ResponseEntity.ok("{\"message\":\"User added successfully\"}");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\":\"Failed to add user\"}");
        }

    }
    @GetMapping("/list")
    public ResponseEntity<?> getUserList(){
       try {
           return ResponseEntity.ok(userInterface.getUserList());
       }
       catch (Exception e) {
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get users");

       }
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserByid(@PathVariable("id") Long id){
        try {
            Optional<UserModal> user = userInterface.getUserById(id);
            if (user.isPresent()) {
                return ResponseEntity.ok(user.get());
            } else {
                return ResponseEntity.notFound().build();
            }

        }catch (Exception e) {
          return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get user with id " +id);
        }
    }
}

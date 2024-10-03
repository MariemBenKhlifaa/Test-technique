package com.tn.ngsign.test.user.service;

import com.tn.ngsign.test.user.modal.UserModal;
import com.tn.ngsign.test.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService implements UserInterface{

    UserRepository userRepository;
    @Override
    public UserModal addUser(UserModal userModal) {
        return userRepository.save(userModal);
    }

    @Override
    public List<UserModal> getUserList() {
        return userRepository.findAll();
    }

    @Override
    public Optional<UserModal> getUserById(Long userId) {
        return userRepository.findById(userId);
    }
}

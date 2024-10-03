package com.tn.ngsign.test.user.service;
import com.tn.ngsign.test.user.modal.UserModal;

import java.util.List;
import java.util.Optional;

public interface UserInterface {
    public UserModal addUser(UserModal userModal);
    public List<UserModal> getUserList();
    public Optional<UserModal> getUserById(Long userId);
}

package com.tn.ngsign.test.user.repository;
import com.tn.ngsign.test.user.modal.UserModal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserModal, Long> {

}

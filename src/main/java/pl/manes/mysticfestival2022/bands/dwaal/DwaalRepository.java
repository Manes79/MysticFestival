package pl.manes.mysticfestival2022.bands.dwaal;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface DwaalRepository extends CrudRepository<Dwaal, UUID> {
}
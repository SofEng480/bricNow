package edu.csupomona.cs480.Repo;

import edu.csupomona.cs480.data.Area;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * This file sets the queries that will be used to get the information in the tables
 */
@Repository
public  interface AreaRepository extends JpaRepository<Area,Long>{

//    public List<Area> findByUpdateInt(int lastUpdate);
//    @Query(value = "SELECT SUM(crowd_count) FROM bric_info WHERE update_int = ?1",nativeQuery = true)
//    public int findByUpdateIntandSum(int num);

    @Query(value = "select SUM(last_count)FROM bric_now WHERE date_last_updated = ?1", nativeQuery = true)
    public Area getLastValues(String date);
    @Query(value = "select * FROM bric_now WHERE id = ?1", nativeQuery = true)
    public Area getArea(int id);

    @Query(value = "select * FROM BricInfo.bric_now\n" +
            "group by area desc", nativeQuery = true)
    public List<Area> getAllByArea();

    @Query(value = "SELECT * FROM BricInfo.bric_now order by id DESC limit 12",nativeQuery = true)
    public List<Area> getMostRecent();


}

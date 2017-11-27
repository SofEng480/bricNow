package edu.csupomona.cs480.data;

import org.springframework.boot.orm.jpa.EntityScan;

import javax.persistence.*;
import java.io.Serializable;

/**
 * This class is needed to map the fields in the SQL table and
 * what Spring will extract from.
 */
@Entity
@Table(name = "bric_now" )
public class Area implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "date_last_updated")
    private String dateLastUpdate;

    @Column(name = "area")
    private String area;

    @Column(name = "last_count")
    private String lastCount;

    public String getLastCount() {
        return lastCount;
    }

    public void setLastCount(String lastCount) {
        this.lastCount = lastCount;
    }
    public String getDateLastUpdate() {
        return dateLastUpdate;
    }

    public void setDateLastUpdate(String dateLastUpdate) {
        this.dateLastUpdate = dateLastUpdate;
    }
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

}
